package com.elka.backend.service;

import com.elka.backend.persistence.Foo;
import com.elka.backend.persistence.IFooRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class FooService {
    private IFooRepository fooRepository;

    public List<Foo> getFoos() {
        return fooRepository.findAll();
    }
}
