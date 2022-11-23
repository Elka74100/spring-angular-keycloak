package com.elka.backend.persistence;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IFooRepository extends JpaRepository<Foo, Long> {
    List<Foo> findAllByUserId(String userId);
}