package com.example.springtemplate.daos;

import com.example.springtemplate.models.Article;
import com.example.springtemplate.models.User;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class ArticleJdbcDao {
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
    String CREATE_ARTICLE = "INSERT INTO articles VALUES (null, ?, ?, ?, ?, ?, ?)";
    String FIND_ALL_ARTICLES = "SELECT * FROM articles";
    String FIND_ARTICLE_BY_ID = "SELECT * FROM articles WHERE id=?";
    String DELETE_ARTICLE = "DELETE FROM articles WHERE id=?";
    String UPDATE_ARTICLE = "UPDATE articles SET title=?, content=?, bibliography=?, author=?, editor=?, journal=? WHERE id=?";

    private Connection getConnection() throws ClassNotFoundException, SQLException {
        Class.forName(DRIVER);
        return DriverManager.getConnection(URL, USERNAME, PASSWORD);
    }
    
    private void closeConnection(Connection connection) throws SQLException {
        connection.close();
    }

    public Integer createArticle(Article article)
            throws ClassNotFoundException, SQLException {
        Integer rowsUpdated = 0;
        connection = getConnection();
        statement = connection.prepareStatement(CREATE_ARTICLE);
        statement.setString(1, article.getTitle());
        statement.setString(2, article.getContent());
        statement.setString(3, article.getBibliography());
        statement.setInt(4, article.getAuthor());
        statement.setInt(5, article.getEditor());
        statement.setInt(6, article.getJournal());
        rowsUpdated = statement.executeUpdate();
        closeConnection(connection);
        return rowsUpdated;
    }

    public List<Article> findAllArticles() throws ClassNotFoundException, SQLException {
        List<Article> articles = new ArrayList<Article>();
        connection = getConnection();
        statement = connection.prepareStatement(FIND_ALL_ARTICLES);
        ResultSet resultSet = statement.executeQuery();
        while (resultSet.next()) {
            Article article = new Article(
                    resultSet.getString("title"),
                    resultSet.getString("content"),
                    resultSet.getString("bibliography"),
                    resultSet.getInt("author"),
                    resultSet.getInt("editor"),
                    resultSet.getInt("journal")
            );
            articles.add(article);
        }
        closeConnection(connection);
        return articles;
    }
    
    public Article findArticleById(Integer id) throws SQLException, ClassNotFoundException {
        Article article = null;
        connection = getConnection();
        statement = connection.prepareStatement(FIND_ARTICLE_BY_ID);
        statement.setInt(1, id);
        ResultSet resultSet = statement.executeQuery();
        if(resultSet.next()) {
            article = new Article(
                    resultSet.getString("title"),
                    resultSet.getString("content"),
                    resultSet.getString("bibliography"),
                    resultSet.getInt("author"),
                    resultSet.getInt("editor"),
                    resultSet.getInt("journal")
            );
        }
        closeConnection(connection);
        return article;
    }
    
    public Integer deleteArticle(Integer articleId) throws SQLException, ClassNotFoundException {
        Integer rowsDeleted = 0;
        connection = getConnection();
        statement = connection.prepareStatement(DELETE_ARTICLE);
        statement.setInt(1, articleId);
        rowsDeleted = statement.executeUpdate();
        closeConnection(connection);
        return rowsDeleted;
    }

    public Integer updateArticle(Integer articleId, Article newArticle) throws SQLException, ClassNotFoundException {
        Integer rowsUpdated = 0;
        connection = getConnection();
        statement = connection.prepareStatement(UPDATE_ARTICLE);
        statement.setString(1, newArticle.getTitle());
        statement.setString(2, newArticle.getContent());
        statement.setString(3, newArticle.getBibliography());
        statement.setInt(4, newArticle.getAuthor());
        statement.setInt(5, newArticle.getEditor());
        statement.setInt(6, newArticle.getJournal());
        statement.setInt(7, articleId);
        rowsUpdated = statement.executeUpdate();
        closeConnection(connection);
        return rowsUpdated;
    }

    public static void main(String[] args) throws SQLException, ClassNotFoundException {
        System.out.println("JDBC DAO");
        ArticleJdbcDao dao = new ArticleJdbcDao();

        //create article
//        Article medievals = new Article("Medieval Castles", "Very cool stuff", "youtube", 2, 5, 2);
//
//        dao.createArticle(medievals);

        //retrieve all articles
//        List<Article> articles = dao.findAllArticles();
//        for(Article article: articles) {
//            System.out.println(article.getTitle());
//        }

        //find article by id
//        Article article = dao.findArticleById(1);
//        System.out.println(article.getTitle());

        //delete article
//        dao.deleteArticle(1);
//        List<Article> articles = dao.findAllArticles();
//        for(Article article: articles) {
//            System.out.println(article.getTitle());
//        }

        //update article
//        Article middies = new Article("Medieval Trebuchets", "Super cool stuff", "youtube", 2, 5, 2);
//        dao.updateArticle(4, middies);
//        Article medievals = dao.findArticleById(4);
//        System.out.println(medievals.getTitle());
    }
}
