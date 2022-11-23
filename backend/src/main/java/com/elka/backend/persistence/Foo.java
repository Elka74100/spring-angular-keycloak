package com.elka.backend.persistence;


import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class Foo {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private String name;
    private String userId;

}
