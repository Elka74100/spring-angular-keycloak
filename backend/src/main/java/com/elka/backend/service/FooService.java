package com.elka.backend.service;

import com.elka.backend.persistence.Foo;
import com.elka.backend.persistence.IFooRepository;
import com.elka.backend.util.AuthenticationFacade;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
@AllArgsConstructor
public class FooService {
    @Autowired
    private AuthenticationFacade authenticationFacade;
    private IFooRepository fooRepository;

    public List<Foo> getFoos() {
        if (authenticationFacade.getAuthentication() != null
                && authenticationFacade.getAuthentication().getAuthorities().stream().anyMatch(a -> a.getAuthority().equals("admin"))) {
            return fooRepository.findAll();
        }

        if (authenticationFacade.getAuthentication() != null) {
            return fooRepository.findAllByUserId(authenticationFacade.getAuthentication().getName());
        }

        return Collections.emptyList();
    }

    public void addFoo() {
        Foo foo = new Foo();
        foo.setName("dou");
        foo.setUserId(authenticationFacade.getAuthentication().getName());
        fooRepository.save(foo);
    }
}
