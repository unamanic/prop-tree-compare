package com.unamanic.proptreecompare.propertymanager;

import com.unamanic.proptreecompare.model.FileEntity;
import com.unamanic.proptreecompare.model.PropertyEntity;
import com.unamanic.proptreecompare.repositories.FileEntityRepository;
import com.unamanic.proptreecompare.repositories.PropertyEntityRepository;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.nio.file.Path;
import java.util.Arrays;
import java.util.Properties;

@Component
@Transactional
public class PropertyIngestorImpl implements PropertyIngestor {

    private final PropertyEntityRepository propertyEntityRepository;
    private final FileEntityRepository fileEntityRepository;

    public PropertyIngestorImpl(PropertyEntityRepository propertyEntityRepository, FileEntityRepository fileEntityRepository) {
        this.propertyEntityRepository = propertyEntityRepository;
        this.fileEntityRepository = fileEntityRepository;
    }

    public void ingest(String tag, String startingPath){
        System.out.println("In Ingestor - Tag:" + tag + " Path: " + startingPath );
        Path path = new File(startingPath).toPath();
        ingestorWorker(tag, startingPath, path);
    }

    private void ingestorWorker(String tag, String currentPathString, final Path startingPath) {
        File path = new File(currentPathString);
        Arrays.stream(path.listFiles()).forEach(f -> {
            if(f.isDirectory()){
                ingestorWorker(tag, f.getPath(), startingPath);
            } else if (f.getName().endsWith(".properties")){
                ingestFile(tag, f, startingPath);
            }
        });
    }

    private void ingestFile(final String tag, File f, Path startingPath) {
        Properties props = new Properties();
        try {
            props.load(new FileInputStream(f));

            final FileEntity fileEntity = fileEntityRepository.save(FileEntity.builder()
                    .fileName(f.getName())
                    .relPath(startingPath.relativize(f.toPath()).toString())
                    .tag(tag)
                    .build());

            props.stringPropertyNames().stream().forEach(pName -> {
                this.propertyEntityRepository.save(PropertyEntity.builder()
                        .file(fileEntity)
                        .propertyName(pName)
                        .propertyValue(props.getProperty(pName))
                        .build());
            });
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}
