package com.codegym.service.country;

import com.codegym.model.Country;
import com.codegym.repository.ICountryRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

public class CountryService implements ICountryService{
    @Autowired
    ICountryRepository repository;
    @Override
    public Iterable<Country> findAll() {
        return repository.findAll();
    }

    @Override
    public Optional<Country> findById(long id) {
        return repository.findById(id);
    }

    @Override
    public Country save(Country country) {
        return repository.save(country);
    }

    @Override
    public void remove(long id) {
        repository.deleteById(id);
    }
    @Override
    public Iterable<Country> findByOrderByIdDesc(){
        return null;
    }
}
