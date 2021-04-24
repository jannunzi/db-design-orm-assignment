package com.example.springtemplate.daos;

import com.example.springtemplate.models.User;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class JournalJdbcDao {
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
  String CREATE_JOURNAL = "INSERT INTO journals VALUES (null, ?, ?, ?, ?)";
  String FIND_ALL_JOURNALS = "SELECT * FROM journals";
  String FIND_JOURNAL_BY_ID = "SELECT * FROM journals WHERE id=?";
  String DELETE_JOURNAL = "DELETE FROM journals WHERE id=?";
  String UPDATE_JOURNAL = "UPDATE journals SET name=?, topic=?, release_date=?, volume=? WHERE id=?";

  private Connection getConnection() throws ClassNotFoundException, SQLException {
    Class.forName(DRIVER);
    return DriverManager.getConnection(URL, USERNAME, PASSWORD);
  }

  private void closeConnection(Connection connection) throws SQLException {
    connection.close();
  }

  public Integer createJournal(Journal journal)
          throws ClassNotFoundException, SQLException {
    Integer rowsUpdated = 0;
    connection = getConnection();
    statement = connection.prepareStatement(CREATE_JOURNAL);
    statement.setString(1, journal.getName());
    statement.setString(2, journal.getTopic());
    statement.setString(3, journal.getReleaseDate());
    statement.setString(4, journal.getVolume());
    rowsUpdated = statement.executeUpdate();
    closeConnection(connection);
    return rowsUpdated;
  }

  public List<Journal> findAllJournals() throws ClassNotFoundException, SQLException {
    List<Journal> journals = new ArrayList<Journal>();
    connection = getConnection();
    statement = connection.prepareStatement(FIND_ALL_JOURNALS);
    ResultSet resultSet = statement.executeQuery();
    while (resultSet.next()) {
      Journal journal = new Journal(
              resultSet.getString("name"),
              resultSet.getString("topic"),
              resultSet.getString("release_date"),
              resultSet.getString("volume")
      );
      journals.add(journal);
    }
    closeConnection(connection);
    return journals;
  }

  public Journal findJournalById(Integer id) throws SQLException, ClassNotFoundException {
    Journal journal = null;
    connection = getConnection();
    statement = connection.prepareStatement(FIND_JOURNAL_BY_ID);
    statement.setInt(1, id);
    ResultSet resultSet = statement.executeQuery();
    if (resultSet.next()) {
      journal = new Journal(
              resultSet.getString("name"),
              resultSet.getString("topic"),
              resultSet.getString("release_date"),
              resultSet.getString("volume")
      );
    }
    closeConnection(connection);
    return journal;
  }

  public Integer deleteJournal(Integer id) throws SQLException, ClassNotFoundException {
    Integer rowsDeleted = 0;
    connection = getConnection();
    statement = connection.prepareStatement(DELETE_JOURNAL);
    statement.setInt(1, id);
    rowsDeleted = statement.executeUpdate();
    closeConnection(connection);
    return rowsDeleted;
  }

  public Integer updateJournal(Integer journalId, Journal newJournal) throws SQLException, ClassNotFoundException {
    Integer rowsUpdated = 0;
    connection = getConnection();
    statement = connection.prepareStatement(UPDATE_JOURNAL);
    statement.setString(1, newJournal.getName());
    statement.setString(2, newJournal.getTopic());
    statement.setString(3, newJournal.getReleaseDate());
    statement.setString(4, newJournal.getVolume());
    statement.setInt(5, journalId);
    rowsUpdated = statement.executeUpdate();
    closeConnection(connection);
    return rowsUpdated;
  }

  public static void main(String[] args) throws SQLException, ClassNotFoundException {
    System.out.println("JDBC DAO");
    JournalJdbcDao dao = new JournalJdbcDao();
  }
}