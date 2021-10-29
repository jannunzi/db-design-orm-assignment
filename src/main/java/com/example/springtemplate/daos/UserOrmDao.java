package com.example.springtemplate.daos;

import com.example.springtemplate.models.User;
import com.example.springtemplate.repositories.UserRestRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class UserOrmDao {
    @Autowired
    UserRestRepository userRepository;
    public User createUser() { return null; }
    public List<User> findAllUser() { return null; }
    public User findUserById(Integer id) { return null; }
    public Integer deleteUser(Integer id) { return null; }
    public Integer updateUser() { return null; }
}
