package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Medications;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MedicationRepository
        extends CrudRepository<Medications, Integer> {
  @Query(value = "Select * FROM medications", nativeQuery = true)
  List<Medications> findAllMeds();
  @Query(value = "SELECT * FROM medications WHERE name=:userId", nativeQuery = true)
  Medications findMedByName(@Param("userId") String name);
  @Query(value = "Insert into medications(name) values ('Lexapro')\n" +
          "Insert into medications(name) values ('Zoloft')\n" +
          "Insert into medications(name) values ('Prozac')\n" +
          "Insert into medications(name) values ('Celexa')\n" +
          "Insert into medications(name) values ('Welbutrin')\n" +
          "Insert into medications(name) values ('Effexor')\n" +
          "Insert into medications(name) values ('Trazadone')\n" +
          "Insert into medications(name) values ('Levora')\n" +
          "Insert into medications(name) values ('Velivet')\n" +
          "Insert into medications(name) values ('Ocella')\n" +
          "Insert into medications(name) values ('Hydrocodeine')\n" +
          "Insert into medications(name) values ('Dronabinol')\n" +
          "Insert into medications(name) values ('Adderall')\n" +
          "Insert into medications(name) values ('Allegra')\n" +
          "Insert into medications(name) values ('Zyrtec')", nativeQuery = true)
  void initialPopulation();
}
