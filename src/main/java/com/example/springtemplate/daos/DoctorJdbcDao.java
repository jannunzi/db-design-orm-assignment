package com.example.springtemplate.daos;

import com.example.springtemplate.models.Doctor;

import java.sql.*;
import java.sql.Date;
import java.util.*;

public class DoctorJdbcDao {
    static final String DRIVER = "com.mysql.cj.jdbc.Driver";
    static final String HOST = "localhost:3306";
    static final String SCHEMA = "db_project";
    static final String CONFIG = "serverTimezone=UTC";
    static final String URL =
            "jdbc:mysql://"+HOST+"/"+SCHEMA+"?"+CONFIG;
    static final String USERNAME = "root";
    static final String PASSWORD = "P@ssw0rd";
    
    static Connection connection = null;
    static PreparedStatement statement = null;
    String CREATE_DOCTOR = "INSERT INTO `db_project`.`doctors`\n" +
            "(`firstname`,\n" +
            "`lastname`,\n" +
            "`username`,\n" +
            "`password`,\n" +
            "`email`,\n" +
            "`DOB`,\n" +
            "`hospital`,\n" +
            "`position`)\n" +
            "VALUES\n" +
            "(?,\n" +
            "?,\n" +
            "?,\n" +
            "?,\n" +
            "?,\n" +
            "?,\n" +
            "?,\n" +
            "?);\n";
    String FIND_ALL_DOCTORS = "SELECT * FROM doctors";
    String FIND_DOCTOR_BY_ID = "SELECT * FROM doctors WHERE id=?";
    String DELETE_DOCTOR = "DELETE FROM doctors WHERE id=?";
    String UPDATE_DOCTOR_PASSWORD = "UPDATE doctors SET password=? WHERE id=?";
    String UPDATE_DOCTOR = "UPDATE doctors SET firstname=?, lastname=?, username=?, password=? " +
            "email=?, DOB=?, position=?, hospital=? WHERE id=?";


    
    private Connection getConnection() throws ClassNotFoundException, SQLException {
        Class.forName(DRIVER);
        return DriverManager.getConnection(URL, USERNAME, PASSWORD);
    }
    
    private void closeConnection(Connection connection) throws SQLException {
        connection.close();
    }
    
    public Doctor findDoctorById(Integer id) throws SQLException, ClassNotFoundException {
        Doctor doctor = null;
        connection = getConnection();
        statement = connection.prepareStatement(FIND_DOCTOR_BY_ID);
        statement.setInt(1, id);
        ResultSet resultSet = statement.executeQuery();
        if(resultSet.next()) {
            doctor = new Doctor(
                    resultSet.getString("firstname"),
                    resultSet.getString("lastname"),
                    resultSet.getString("username"),
                    resultSet.getString("password"),
                    resultSet.getString("email"),
                    resultSet.getDate("DOB"),
                    resultSet.getString("position"),
                    resultSet.getString("hospital")
            );
        }
        closeConnection(connection);
        return doctor;
    }
    
    public Integer deleteDoctor(Integer userId) throws SQLException, ClassNotFoundException {
        Integer rowsDeleted = 0;
        connection = getConnection();
        statement = connection.prepareStatement(DELETE_DOCTOR);
        statement.setInt(1, userId);
        rowsDeleted = statement.executeUpdate();
        closeConnection(connection);
        return rowsDeleted;
    }
    
    public Integer updateDoctor(Integer userId, Doctor newDoctor) throws SQLException, ClassNotFoundException {
        Integer rowsUpdated = 0;
        connection = getConnection();
        statement = connection.prepareStatement(UPDATE_DOCTOR);
        statement.setString(1, newDoctor.getFirstname());
        statement.setString(2, newDoctor.getLastname());
        statement.setString(3, newDoctor.getUsername());
        statement.setString(4, newDoctor.getPassword());
        statement.setString(5, newDoctor.getEmail());
        statement.setDate(6, newDoctor.getDOB());
        statement.setString(7, newDoctor.getPosition());
        statement.setString(8, newDoctor.getHospital());
        statement.setInt(9, userId);
        
        rowsUpdated = statement.executeUpdate();
        closeConnection(connection);
        return rowsUpdated;
    }
    
    public List<Doctor> findAllDoctors() throws ClassNotFoundException, SQLException {
        List<Doctor> doctors = new ArrayList<Doctor>();
        connection = getConnection();
        statement = connection.prepareStatement(FIND_ALL_DOCTORS);
        ResultSet resultSet = statement.executeQuery();
        while (resultSet.next()) {
            Doctor doctor = new Doctor(
                    resultSet.getString("firstname"),
                    resultSet.getString("lastname"),
                    resultSet.getString("username"),
                    resultSet.getString("password"),
                    resultSet.getString("email"),
                    resultSet.getDate("DOB"),
                    resultSet.getString("position"),
                    resultSet.getString("hospital")
            );
            doctors.add(doctor);
        }
        closeConnection(connection);
        return doctors;
    }
    public Integer createDoctor(Doctor doctor)
            throws ClassNotFoundException, SQLException {
        Integer rowsUpdated = 0;
        connection = getConnection();
        statement = connection.prepareStatement(CREATE_DOCTOR);
        statement.setString(1, doctor.getFirstname());
        statement.setString(2, doctor.getLastname());
        statement.setString(3, doctor.getUsername());
        statement.setString(4, doctor.getPassword());
        statement.setString(5, doctor.getEmail());
        statement.setDate(6,doctor.getDOB());
        statement.setString(7, doctor.getPosition());
        statement.setString(8, doctor.getHospital());
        rowsUpdated = statement.executeUpdate();
        closeConnection(connection);
        return rowsUpdated;
    }

public static void main(String[] args) throws SQLException, ClassNotFoundException{
    System.out.println("JDBC DAO");
    DoctorJdbcDao dao = new DoctorJdbcDao();

    Doctor DrRob = new Doctor(
    "Robert",
            "Phoughts",
            "rphoughts",
            "robisnumber1",
            "rpho@partners.org",
             Date.valueOf("1980-10-10"),
            "Lead Psychiatrist",
            "Mass General");
    dao.createDoctor(DrRob);

    System.out.println(dao.findDoctorById(1).getUsername());

}
}


