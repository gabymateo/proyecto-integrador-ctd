package com.backend.grupo5.controller.input.feature;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data @Getter @Setter
public class FeatureUpdateInput {
    private String name;
    private String type;
    private String icon;
}
