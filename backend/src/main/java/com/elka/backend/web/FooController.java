package com.elka.backend.web;

import com.elka.backend.persistence.Foo;
import com.elka.backend.service.FooService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class FooController {

    private final FooService fooService;

    @GetMapping()
    public List<Foo> getFoos() {
        return fooService.getFoos();
    }
}
