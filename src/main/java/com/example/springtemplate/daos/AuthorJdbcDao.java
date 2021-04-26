package com.example.springtemplate.daos;

import com.example.springtemplate.models.*;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class AuthorJdbcDao {
  static final String DRIVER = "com.mysql.cj.jdbc.Driver";
  static final String HOST = "localhost:3306";
  static final String SCHEMA = "db_journals";
  static final String CONFIG = "serverTimezone=UTC";
  static final String URL =
          "jdbc:mysql://" + HOST + "/" + SCHEMA + "?" + CONFIG;
  static final String USERNAME = "root";
  static final String PASSWORD = "P@ssw0rd";

  static Connection connection = null;
  static PreparedStatement statement = null;
  String CREATE_AUTHOR = "INSERT INTO authors VALUES (null, ?, ?)";
  String FIND_ALL_AUTHORS = "SELECT * FROM authors";
  String FIND_AUTHOR_BY_ID = "SELECT * FROM authors WHERE id=?";
  String DELETE_AUTHOR = "DELETE FROM authors WHERE id=?";
  String UPDATE_AUTHOR = "UPDATE authors SET primary_topic=?, user_id=? WHERE id=?";

  private Connection getConnection() throws ClassNotFoundException, SQLException {
    Class.forName(DRIVER);
    return DriverManager.getConnection(URL, USERNAME, PASSWORD);
  }

  private void closeConnection(Connection connection) throws SQLException {
    connection.close();
  }

  public Integer createAuthor(Author author)
          throws ClassNotFoundException, SQLException {
    Integer rowsUpdated = 0;
    connection = getConnection();
    statement = connection.prepareStatement(CREATE_AUTHOR);
    statement.setString(1, author.getTopic().description);
    statement.setInt(2, author.getUserId());
    rowsUpdated = statement.executeUpdate();
    closeConnection(connection);
    return rowsUpdated;
  }

  public List<Author> findAllAuthors() throws ClassNotFoundException, SQLException {
    List<Author> authors = new ArrayList<Author>();
    connection = getConnection();
    statement = connection.prepareStatement(FIND_ALL_AUTHORS);
    ResultSet resultSet = statement.executeQuery();
    while (resultSet.next()) {
      Author author = new Author(
              resultSet.getInt("id"),
              Topic.getTopicFromString(resultSet.getString("primary_topic")),
              resultSet.getInt("user_id")
      );
      authors.add(author);
    }
    closeConnection(connection);
    return authors;
  }

  public Author findAuthorById(Integer id) throws SQLException, ClassNotFoundException {
    Author author = null;
    connection = getConnection();
    statement = connection.prepareStatement(FIND_AUTHOR_BY_ID);
    statement.setInt(1, id);
    ResultSet resultSet = statement.executeQuery();
    if (resultSet.next()) {
      author = new Author(
              resultSet.getInt("id"),
              Topic.getTopicFromString(resultSet.getString("primary_topic")),
              resultSet.getInt("user_id")
      );
    }
    closeConnection(connection);
    return author;
  }

  public Integer deleteAuthor(Integer id) throws SQLException, ClassNotFoundException {
    Integer rowsDeleted = 0;
    connection = getConnection();
    statement = connection.prepareStatement(DELETE_AUTHOR);
    statement.setInt(1, id);
    rowsDeleted = statement.executeUpdate();
    closeConnection(connection);
    return rowsDeleted;
  }

  public Integer updateAuthor(Integer authorId, Author newAuthor) throws SQLException, ClassNotFoundException {
    Integer rowsUpdated = 0;
    connection = getConnection();
    statement = connection.prepareStatement(UPDATE_AUTHOR);
    statement.setString(1, newAuthor.getTopic().description);
    statement.setInt(2, newAuthor.getUserId());
    statement.setInt(3, authorId);
    rowsUpdated = statement.executeUpdate();
    closeConnection(connection);
    return rowsUpdated;
  }

  public static void main(String[] args) throws SQLException, ClassNotFoundException {
    System.out.println("JDBC DAO");
    AuthorJdbcDao dao = new AuthorJdbcDao();

//    create new authors
//    Author yusuke = new Author(Topic.ART, 4);
//    Author one = new Author(Topic.ART, 5);
//    dao.createAuthor(yusuke);
//    dao.createAuthor(one);
//
//    list all authors
//    List<Author> authors = dao.findAllAuthors();
//    for(Author author: authors) {
//      System.out.println(author.getAuthorId());
//    }
//
//    find author by id
//    Author author = dao.findAuthorById(1);
//        System.out.println(author.getAuthorId());
//
//
//    delete author
//        dao.deleteAuthor(1);
//        List<Author> authors1 = dao.findAllAuthors();
//        for(Author author1: authors1) {
//            System.out.println(author1.getAuthorId());
//        }


//        Author changeOne = new Author(Topic.SCIENCE, 6);
//        dao.updateAuthor(5, changeOne);
//        Author one = dao.findAuthorById(6);
//        System.out.println(one.getAuthorID());
  }
}
