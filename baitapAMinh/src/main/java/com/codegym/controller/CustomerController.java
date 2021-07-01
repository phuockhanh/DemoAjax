package com.codegym.controller;

import com.codegym.model.Country;
import com.codegym.model.Customer;
import com.codegym.service.country.ICountryService;
import com.codegym.service.customer.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.Optional;

@RestController
@RequestMapping("/customers")
public class CustomerController {
    @Autowired
    private ICustomerService customerService;

    @Autowired
    private ICountryService countryService;

    @ModelAttribute("countries")
    public Iterable<Country> countries() {
        return countryService.findAll();
    }

    @PostMapping
    public ResponseEntity<Customer> createCustomer(@RequestBody Customer customer) {
        return new ResponseEntity<>(customerService.save(customer), HttpStatus.CREATED);
    }
    @GetMapping
    public ResponseEntity<Iterable<Customer>> allCustomer() {
        return new ResponseEntity<>(customerService.findByOrderByIdDesc(), HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Customer> deleteCustomer(@PathVariable long id){
        Optional<Customer> optional = customerService.findById(id);
        customerService.remove(id);
        return new ResponseEntity<>(optional.get(),HttpStatus.NO_CONTENT);
    }
    @PostMapping("/edit/{id}")
    public ResponseEntity<Customer> editCustomer(@RequestBody Customer customer,@PathVariable long id){
        Customer customer1 = customerService.findById(id).get();
        customer1.setId(id);
        customer1.setName(customer.getName());
        if(customer.getCountry()!=null){
            customer1.setCountry(customer.getCountry());
        }
        customer1.setPhone(customer.getPhone());
        customer1.setEmail(customer.getEmail());
        return new ResponseEntity<>(customerService.save(customer1),HttpStatus.NO_CONTENT);
    }
    @GetMapping("/list")
    public ModelAndView showList(){
        ModelAndView modelAndView = new ModelAndView("/list");
        Iterable<Customer> customers = customerService.findByOrderByIdDesc();
        modelAndView.addObject("customers",customers);
        return modelAndView;
    }
    @GetMapping("/api/{id}")
    public ResponseEntity<Customer> findCustomer(@PathVariable long id){
        return new ResponseEntity<>(customerService.findById(id).get(),HttpStatus.OK);
    }
//    @PostMapping("/create")
//    public ModelAndView create(Customer customer){
//        ModelAndView modelAndView = new ModelAndView("/list");
//        customerService.save(customer);
//        modelAndView.addObject("customers",customerService.findByOrderByIdDesc());
//        modelAndView.addObject("customer",new Customer());
//        return showList();
//    }
//    @GetMapping("/delete/{id}")
//    public ModelAndView delete(@PathVariable long id){
//        customerService.remove(id);
//        return showList();
//    }
//    @GetMapping("/edit/{id}")
//    public ModelAndView showEdit(@PathVariable long id){
//        ModelAndView modelAndView = new ModelAndView("/list");
//        Customer customer = customerService.findById(id).get();
//        modelAndView.addObject("edit",customer);
//        return showList();
//    }
//    @PostMapping("/edit")
//    public ModelAndView edit(Customer customer){
//        customerService.save(customer);
//        return showList();
//    }
}
