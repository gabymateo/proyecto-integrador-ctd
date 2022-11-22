package com.backend.grupo5.controller.input.feature;

import lombok.*;

@Data @Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class FeatureCreateDTO {
    private String name;
    private String type;
}
