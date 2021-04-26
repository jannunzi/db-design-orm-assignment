package com.example.springtemplate.daos;

import com.example.springtemplate.models.User;

import java.sql.*;
import java.util.*;

public class UserJdbcDao {
    static final String DRIVER = "com.mysql.cj.jdbc.Driver";
    static final String HOST = "localhost:3306";
    static final String SCHEMA = "db_journals";
    static final String CONFIG = "serverTimezone=UTC";
    static final String URL =
            "jdbc:mysql://"+HOST+"/"+SCHEMA+"?"+CONFIG;
    static final String USERNAME = "root";
    static final String PASSWORD = "P@ssw0rd";

    static Connection connection = null;
    static PreparedStatement statement = null;
    String CREATE_USER = "INSERT INTO users VALUES (null, ?, ?, ?, ?, ?, ?)";
    String FIND_ALL_USERS = "SELECT * FROM users";
    String FIND_USER_BY_ID = "SELECT * FROM users WHERE id=?";
    String DELETE_USER = "DELETE FROM users WHERE id=?";
    String UPDATE_USER = "UPDATE users SET first_name=?, last_name=?, username=?, password=? WHERE id=?";

    private Connection getConnection() throws ClassNotFoundException, SQLException {
        Class.forName(DRIVER);
        return DriverManager.getConnection(URL, USERNAME, PASSWORD);
    }

    private void closeConnection(Connection connection) throws SQLException {
        connection.close();
    }

    public User findUserById(Integer id) throws SQLException, ClassNotFoundException {
        User user = null;
        connection = getConnection();
        statement = connection.prepareStatement(FIND_USER_BY_ID);
        statement.setInt(1, id);
        ResultSet resultSet = statement.executeQuery();
        if(resultSet.next()) {
            user = new User(
                    resultSet.getString("username"),
                    resultSet.getString("password"),
                    resultSet.getString("first_name"),
                    resultSet.getString("last_name"),
                    resultSet.getString("email"),
                    resultSet.getString("date_of_birth")
            );
        }
        closeConnection(connection);
        return user;
    }

    public Integer deleteUser(Integer userId) throws SQLException, ClassNotFoundException {
        Integer rowsDeleted = 0;
        connection = getConnection();
        statement = connection.prepareStatement(DELETE_USER);
        statement.setInt(1, userId);
        rowsDeleted = statement.executeUpdate();
        closeConnection(connection);
        return rowsDeleted;
    }

    public Integer updateUser(Integer userId, User newUser) throws SQLException, ClassNotFoundException {
        Integer rowsUpdated = 0;
        connection = getConnection();
        statement = connection.prepareStatement(UPDATE_USER);
        statement.setString(1, newUser.getFirstName());
        statement.setString(2, newUser.getLastName());
        statement.setString(3, newUser.getFirstName());
        statement.setString(4, newUser.getLastName());
        statement.setInt(5, userId);
        rowsUpdated = statement.executeUpdate();
        closeConnection(connection);
        return rowsUpdated;
    }

    public List<User> findAllUsers() throws ClassNotFoundException, SQLException {
        List<User> users = new ArrayList<User>();
        connection = getConnection();
        statement = connection.prepareStatement(FIND_ALL_USERS);
        ResultSet resultSet = statement.executeQuery();
        while (resultSet.next()) {
            User user = new User(
                    resultSet.getString("username"),
                    resultSet.getString("password"),
                    resultSet.getString("first_name"),
                    resultSet.getString("last_name"),
                    resultSet.getString("email"),
                    resultSet.getString("date_of_birth")
            );
            users.add(user);
        }
        closeConnection(connection);
        return users;
    }
    public Integer createUser(User user)
            throws ClassNotFoundException, SQLException {
        Integer rowsUpdated = 0;
        connection = getConnection();
        statement = connection.prepareStatement(CREATE_USER);
        statement.setString(1, user.getUsername());
        statement.setString(2, user.getPassword());
        statement.setString(3, user.getFirstName());
        statement.setString(4, user.getLastName());
        statement.setString(5, user.getEmail());
        statement.setString(6, user.getDateOfBirth());
        rowsUpdated = statement.executeUpdate();
        closeConnection(connection);
        return rowsUpdated;
    }
    public static void main(String[] args) throws SQLException, ClassNotFoundException {
        System.out.println("JDBC DAO");
        UserJdbcDao dao = new UserJdbcDao();

//        create user
//        User john = new User("John", "Doe", "jdoe", "gefsh", "jdoe@gmail.com", "19340605");
//        User jane = new User("Jane", "Doe", "jadoe", "hkdh", "jadoe@gmail.com", "19440605");
//
//        dao.createUser(john);
//        dao.createUser(jane);
//
//        retrieve all users
//        List<User> users = dao.findAllUsers();
//        for(User user: users) {
//            System.out.println(user.getUsername() + ' ' + user.getDate());
//        }

//        find user by id
//        User user = dao.findUserById(1);
//        System.out.println(user.getUsername());

//        delete user
//        dao.deleteUser(1);
//        List<User> users = dao.findAllUsers();
//        for(User user: users) {
//            System.out.println(user.getUsername());
//        }

//        update user
//        User betterJane = new User("Jane", "Doey", "jjdoe", "hkdh", "jjdoe@gmail.com", "19440605");
//        dao.updateUser(3, betterJane);
//        User jane = dao.findUserById(3);
//        System.out.println(betterJane.getId());
    }
}
