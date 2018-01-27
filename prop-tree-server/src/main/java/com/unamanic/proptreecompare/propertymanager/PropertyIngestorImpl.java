package com.unamanic.proptreecompare.propertymanager;

import com.unamanic.proptreecompare.model.PropertyEntity;
import com.unamanic.proptreecompare.repositories.PropertyEntityRepository;
import org.springframework.stereotype.Component;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Arrays;
import java.util.Properties;

@Component
public class PropertyIngestorImpl implements PropertyIngestor {

    private final PropertyEntityRepository propertyEntityRepository;

    public PropertyIngestorImpl(PropertyEntityRepository propertyEntityRepository) {
        this.propertyEntityRepository = propertyEntityRepository;
    }

    public void ingest(String tag, String startingPath){
        System.out.println("In Ingestor - Tag:" + tag + " Path: " + startingPath );
        ingestorWorker(tag, startingPath);
    }

    private void ingestorWorker(String tag, String startingPath) {
        File path = new File(startingPath);
        Arrays.stream(path.listFiles()).forEach(f -> {
            if(f.isDirectory()){
                ingestorWorker(tag, f.getPath());
            } else if (f.getName().endsWith(".properties")){
                ingestFile(tag, f);
            }
        });
    }

    private void ingestFile(final String tag, File f) {
        Properties props = new Properties();
        try {
            props.load(new FileInputStream(f));

            props.stringPropertyNames().stream().forEach(pName -> {
                PropertyEntity entity = new PropertyEntity();
                entity.setFileName(f.getName());
                entity.setPropertyName(pName);
                entity.setPropertyValue(props.getProperty(pName));
                entity.setTag(tag);

                this.propertyEntityRepository.save(entity);
            });
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}
