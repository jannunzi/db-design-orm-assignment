package com.example.springtemplate.daos;

import com.example.springtemplate.models.User;

import java.sql.*;
import java.util.*;

public class UserJdbcDao {
    static final String DRIVER = "com.mysql.cj.jdbc.Driver";
    static final String HOST = "localhost:3306";
    static final String SCHEMA = "YOUR_SCHEMA";
    static final String CONFIG = "serverTimezone=UTC";
    static final String URL =
            "jdbc:mysql://"+HOST+"/"+SCHEMA+"?"+CONFIG;
    static final String USERNAME = "YOUR_USERNAME";
    static final String PASSWORD = "YOUR_PASSWORD";

    String CREATE_USER = "INSERT INTO users VALUES (null, ?, ?, ?, ?, ?, null, null)";
    String FIND_ALL_USERS = "SELECT * FROM users";
    String FIND_USER_BY_ID = "SELECT * FROM users WHERE id=?";
    String DELETE_USER = "DELETE FROM users WHERE id=?";
    String UPDATE_USER_PASSWORD = "UPDATE users SET password=? WHERE id=?";
    String UPDATE_USER = "UPDATE users SET first_name=?, last_name=?, username=?, password=? WHERE id=?";

    static Connection connection = null;
    static PreparedStatement statement = null;

    private Connection getConnection() throws ClassNotFoundException, SQLException {
        Class.forName(DRIVER);
        return DriverManager.getConnection(URL, USERNAME, PASSWORD);
    }

    private void closeConnection(Connection connection) throws SQLException {
        connection.close();
    }

    public User findUserById(Integer id) throws SQLException, ClassNotFoundException {
        return null;
    }

    public Integer deleteUser(Integer userId) throws SQLException, ClassNotFoundException {
        return null;
    }

    public Integer updateUser(Integer userId, User newUser) throws SQLException, ClassNotFoundException {
        return null;
    }

    public List<User> findAllUsers() throws ClassNotFoundException, SQLException {
        return null;
    }
    
    public Integer createUser(User user)
            throws ClassNotFoundException, SQLException {
        return null;
    }
    
    public static void main(String[] args) throws SQLException, ClassNotFoundException {
        System.out.println("JDBC DAO");
    }
}
