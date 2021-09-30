package com.example.kinoticketreservierungssystem;

import com.example.kinoticketreservierungssystem.entity.Movie;
import com.example.kinoticketreservierungssystem.repository.MovieRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;

@SpringBootApplication
public class KinoticketreservierungssystemApplication {

    public static void main(String[] args) {
        SpringApplication.run(KinoticketreservierungssystemApplication.class, args);
    }

    @Bean
    public CommandLineRunner init(
            MovieRepository movieRepository
    ){
        return (args) -> {
            Movie movie1 = new Movie();
            movie1.setName("James Bond 007 - Keine Zeit zu sterben");
            movie1.setDateOfPublish(LocalDate.now());
            movie1.setDescription("Eigentlich wollte James Bond (Daniel Craig) mit seiner großen Liebe Madeleine Swann (Léa Seydoux) seinen Ruhestand genießen und ein normales Leben führen. Doch Bonds alter Kumpel, CIA-Agent Felix Leiter (Jeffrey Wright), holt ihn zurück in sein altes Leben. Leiter braucht Bonds Hilfe, um einen entführten Wissenschaftler, Valdo Obruchev (David Dencik), zu retten. Die Mission erweist sich als heimtückisch und Bond muss bald erfahren, dass der so gefährliche wie mysteriöse Safin (Rami Malek) im Hintergrund die Strippen zieht. Safin verfügt über gefährliche neue Technologie. Ein letztes Mal muss Bond sich auch seinen Widersachern von Spectre stellen und dabei erkennen, dass Ernst Stavro Blofeld (Christoph Waltz) selbst aus dem Gefängnis heraus noch über Einfluss verfügt. Den neuen Gegner kann Bond nicht alleine besiegen und so braucht er unter anderem die Hilfe der neuen Doppel-Null-Agentin Nomi (Lashana Lynch) und der CIA-Agentin Paloma (Ana de Armas).");
            movie1.setDuration(164);
            movieRepository.save(movie1);

        };

    }
}
