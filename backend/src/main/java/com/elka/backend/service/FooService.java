package com.elka.backend.service;

import com.elka.backend.persistence.Foo;
import com.elka.backend.persistence.IFooRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
@AllArgsConstructor
public class FooService {
    private IFooRepository fooRepository;

    public List<Foo> getFoos() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null && auth.getAuthorities().stream().anyMatch(a -> a.getAuthority().equals("admin"))) {
            return fooRepository.findAll();
        }

        return Collections.emptyList();
    }
}
