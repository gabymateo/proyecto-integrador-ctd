package com.backend.grupo5.service.DTO.feature;

import com.backend.grupo5.common.helpers.enums.FeatureType;
import lombok.*;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class FeatureCreateDTO {

    private String name;
    private String type;

}
