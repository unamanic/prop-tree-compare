package com.unamanic.proptreecompare;

import com.unamanic.proptreecompare.propertymanager.PropertyIngestor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Runner implements CommandLineRunner {
    private final PropertyIngestor propertyIngestor;

    public Runner(PropertyIngestor propertyIngestor) {
        this.propertyIngestor = propertyIngestor;
    }

    @Override
    public void run(String... args) throws Exception {
        for(int i = 0; i < args.length; i += 2) {
            if(i + 1 < args.length) {
                this.propertyIngestor.ingest(args[i], args[i + 1]);
            }
        }
    }
}
