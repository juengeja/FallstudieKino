package com.example.kinoticketreservierungssystem.config;

import com.azure.cosmos.CosmosAsyncClient;
import com.azure.cosmos.CosmosClientBuilder;
import com.azure.spring.data.cosmos.config.AbstractCosmosConfiguration;
import com.azure.spring.data.cosmos.config.CosmosConfig;
import com.azure.spring.data.cosmos.core.ReactiveCosmosTemplate;
import com.azure.spring.data.cosmos.core.convert.MappingCosmosConverter;
import com.azure.spring.data.cosmos.repository.config.EnableCosmosRepositories;
import com.azure.spring.data.cosmos.repository.config.EnableReactiveCosmosRepositories;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

@Configuration
public class ConfigDatasource {

    private static final String DATABASE1 = "dhbw-kino-free-tier";

    @Bean
    public CosmosProperties cosmosProperties() {
        return new CosmosProperties();
    }

    @Bean
    public CosmosClientBuilder primaryClientBuilder(CosmosProperties cosmosProperties) {
        return new CosmosClientBuilder()
                .key(cosmosProperties.getKey())
                .endpoint(cosmosProperties.getUri());
    }

    @EnableCosmosRepositories(basePackages = "com.example.kinoticketreservierungssystem.repository")
    public static class Database1Configuration extends AbstractCosmosConfiguration {

        @Primary
        @Bean
        public static ReactiveCosmosTemplate database1Template(CosmosAsyncClient cosmosAsyncClient,
                                                        CosmosConfig cosmosConfig,
                                                        MappingCosmosConverter mappingCosmosConverter) {
            return new ReactiveCosmosTemplate(cosmosAsyncClient, DATABASE1, cosmosConfig, mappingCosmosConverter);
        }

        @Override
        protected String getDatabaseName() {
            return DATABASE1;
        }
    }

    }

