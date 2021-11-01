package com.example.kinoticketreservierungssystem.tempController;

import com.example.kinoticketreservierungssystem.blSupport.Reservation;
import com.example.kinoticketreservierungssystem.blSupport.SeatMod;
import com.example.kinoticketreservierungssystem.entity.*;
import com.example.kinoticketreservierungssystem.repository.*;
import com.example.kinoticketreservierungssystem.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.kinoticketreservierungssystem.entity.Movie;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RequestMapping(value = "/dbitems")
@RestController
@CrossOrigin(origins = "*")
public class AddDBItemsController {



    @Autowired
    CinemaRepository cinemaRepository;
    @Autowired
    EventRoomRepository eventRoomRepository;
    @Autowired
    MovieRepository movieRepository;
    @Autowired
    SeatRepository seatRepository;
    @Autowired
    CreateEntities createEntities;
    @Autowired
    SeatingTemplateRepository seatingTemplateRepository;
    @Autowired
    ShowEventRepository showEventRepository;
    @Autowired
    SeatingPlan seatingPlan;
    @Autowired
    AddSeats addSeats;
    @Autowired
    CreateMovie createMovie;
    @Autowired
    BookingProcess bookingProcess;
    @Autowired
    BookingRepository bookingRepository;
    @Autowired
    TicketPDF ticketPDF;

    @PostMapping("createcinema")
    public void backCreateCinema(){
        createEntities.createCinema("IndigoBW","germany","hesse","heidelberg","albrechtstraße",12,34567,"indigobw@gmail.com","012345678901");
    }

    @PostMapping("/createroom")
    public void backCreateRoom(){
        Cinema cinema = createEntities.getCinema("IndigoBW");
        createEntities.createEventRoom("Delta", "small", cinema);
    }

    @PostMapping("/createseats")
    public void backCreateSeats(){
        EventRoom eventRoom = createEntities.getEventRoom("Delta");
        List<Seat> seats = addSeats.addSeats(eventRoom,6,10);
        addSeats.createSeats(seats);
    }

    @PostMapping("/createseatingtemplate")
    public void backCreateSeatingTemplate(){
        createEntities.createSeatingTemplate(createEntities.getEventRoom("Delta"), createEntities.getSeatsPerRoom("Delta"), new SeatMod(6.50,false));
    }

    @PostMapping("createmovies")
    public void backCreateMovies(){
        Movie movie1 = new Movie("TheAeronauts","The Aeronauts","Action",101,"https://www.dvdsreleasedates.com/posters/800/T/The-Aeronauts-2019-movie-poster.jpg","Ende des 19. Jahrhunderts: Die Luftfahrt-Enthusiastin Amelia Wren (Felicity Jones) liebt die Ballonafahrt über den Wolken, doch die gesellschaftlichen Konventionen der damaligen Zeit verbieten es einer Frau, Pilotin zu werden. Zeitgleich arbeitet der Wissenschaftler James Glaisher (Eddie Redmayne) daran, die Wettervorhersage zu verbessern und wird dafür für einen Fantasten gehalten. Die beiden gesellschaftlichen Außenseiter und Querdenker tun sich zusammen, um es der Welt zu zeigen. In einer halsbrecherischen, lebensgefährlichen Ballonfahrt über 8000 Meter wollen sie bisher Unerreichtes beweisen. Doch die beiden Abenteurer sind der Natur und den Gezeiten bald hoffnungslos ausgeliefert. Die Pionierarbeit ist wahrlich kein Zuckerschlecken ...");
        Movie movie2 = new Movie("Dune","Dune","Sci-Fi",156,"https://alternativemovieposters.com/wp-content/uploads/2021/02/ClaireCurtis_Dune.jpg","Paul Atreides (Timothee Chalamet) siedelt gemeinsam mit seinem Vater Herzog Leto (Oscar Isaac), seiner Mutter Lady Jessica (Rebecca Ferguson) und dem gesamten Hauststand des Adelshauses Atreides auf den Planeten Arrakis um, der auch als Dune bekannt ist. Dort sollen die Atreides sicherstellen, dass das Spice, eine Droge, die intergalaktische Reisen erst möglich macht und nur auf Arrakis zu finden ist, weiter abgebaut wird. Doch die Reise nach Arrakis entpuppt sich als Falle, die Baron Vladimir Harkonnen (Stellan Skarsgård) den Atreides gemeinsam mit dem Herrscher des galaktischen Imperiums gestellt hat. Paul muss gemeinsam mit seiner Mutter in die endlosen Wüsten von Dune fliehen, wo er auf die geheimnisvollen Fremen um deren Anführer Stilgar (Javier Bardem) und die furchtlose Chani (Zendaya) trifft, ein nomadisches Wüstenvolk, das auf die Ankunft eines prophezeiten Erlösers wartet...");
        Movie movie3 = new Movie("JamesBond","James Bond 007 - Keine Zeit zu sterben","Action",164,"https://gfx.videobuster.de/archive/v/cHyeG0HbWSnua07NozUhCVAcz0lMkawsSUyRjAxJTJGaW1hmSUyRmpwZWclMkbgv2RkrP02Y2E3ZWNh5WPzZGRmM2Q2ZmZmMy5qcGcmcj137zg/james-bond-007-keine-zeit-zu-sterben-poster.jpg","Eigentlich wollte James Bond (Daniel Craig) mit seiner großen Liebe Madeleine Swann (Léa Seydoux) seinen Ruhestand genießen und ein normales Leben führen. Doch Bonds alter Kumpel, CIA-Agent Felix Leiter (Jeffrey Wright), holt ihn zurück in sein altes Leben. Leiter braucht Bonds Hilfe, um einen entführten Wissenschaftler, Valdo Obruchev (David Dencik), zu retten. Die Mission erweist sich als heimtückisch und Bond muss bald erfahren, dass der so gefährliche wie mysteriöse Safin (Rami Malek) im Hintergrund die Strippen zieht. Safin verfügt über gefährliche neue Technologie. Ein letztes Mal muss Bond sich auch seinen Widersachern von Spectre stellen und dabei erkennen, dass Ernst Stavro Blofeld (Christoph Waltz) selbst aus dem Gefängnis heraus noch über Einfluss verfügt. Den neuen Gegner kann Bond nicht alleine besiegen und so braucht er unter anderem die Hilfe der neuen Doppel-Null-Agentin Nomi (Lashana Lynch) und der CIA-Agentin Paloma (Ana de Armas)...");
        Movie movie4 = new Movie("Candyman","Candyman","Action",164,"https://i0.wp.com/teaser-trailer.com/wp-content/uploads/Candyman-movie-2021-poster.jpg?ssl=1","Als Anthony (Yahya Abdul-Mateen II) und seine Freundin Brianna (Teyonah Parris) in das Chicagoer Stadtviertel Cabrini Green ziehen, ahnen sie nicht, dass sie damit einen wahren Albtraum entfesseln. Von einem alten Bewohner der Gegend erfährt Anthony vom Fluch des sogenannten Candyman, einem unheimlichen Killer, der früher in Chicago sein Unwesen trieb, und dessen Name man fünfmal vor dem eigenen Spiegelbild aussprechen muss, um ihn heraufzubeschwören. Anthony ist fasziniert von der Legende um den unheimlichen Mörder. Doch je mehr er sich mit der Geschichte befasst, desto beunruhigender ist die Veränderung, die mit ihm vorgeht. Immer tiefer gerät Anthony in einen tödlichen Sog aus Wahn und Wirklichkeit, doch die alles entscheidende Frage ist: Wer ist der Candyman?");
        Movie movie5 = new Movie("TheLetter","The Letter","Action",164,"https://premium-films.com/sites/default/files/styles/large/public/poster_the-love-letter_low.jpg?itok=q5u9qOW9","The Letter ist ein Dokumentarfilm aus dem Jahr 2019 von Maia Lekow und Chris King...");

        createMovie.createMovie(movie1);
        createMovie.createMovie(movie2);
        createMovie.createMovie(movie3);
        createMovie.createMovie(movie4);
        createMovie.createMovie(movie5);
    }

    @PostMapping("createshowevent")
    public void backCreateShowEvent() {
        //createEntities.createShowEvent("","Dune","AstraTemplate2021-10-24T21:54:43.795811400", LocalDateTime.of(2021, 1, 14, 15, 56), true, true);
        createEntities.createShowEvent("TheAeronauts1Event","TheAeronauts","AstraTemplate2021-10-24T21:54:43.795811400",LocalDateTime.of(2021, 12, 25, 22, 0),false,true);
        createEntities.createShowEvent("TheAeronauts2Event","TheAeronauts","AstraTemplate2021-10-24T21:54:43.795811400",LocalDateTime.of(2021, 12, 26, 15, 30),true,true);
        createEntities.createShowEvent("TheAeronauts3Event","TheAeronauts","AstraTemplate2021-10-24T21:54:43.795811400",LocalDateTime.of(2021, 12, 26, 17, 30),true,true);
        createEntities.createShowEvent("TheAeronauts4Event","TheAeronauts","AstraTemplate2021-10-24T21:54:43.795811400",LocalDateTime.of(2021, 12, 26, 22, 0),false,true);
    }

    @PostMapping("reserveseat")
    public void backReserveSeatTest(){
        List<String> seats = new ArrayList<>();
        seats.add("AstraC12");
        seats.add("AstraA3");
        ShowEvent showEvent = showEventRepository.findByShowEventID("firstEvent").get();
        bookingRepository.save(bookingProcess.reserveSeats(new Reservation()));
    }
    @PostMapping("bookseat")
    public void backBookSeatTest(){
        Booking booking = bookingRepository.findByBookingID("booking2021-10-17T20:59:07.772063900").get();
        bookingRepository.save(bookingProcess.bookSeats(booking));
    }
    @PostMapping("temptest")
    public void backTest(){
        Booking booking = bookingRepository.findByBookingID("secondEvent").get();
        booking.setPaymentMethod("Paypal");
        bookingRepository.save(booking);
    }
   @PostMapping("writepdf")
    public void writePDF(){
        Set<Ticket> tickets = new HashSet<>();
      // Ticket ticket = new Ticket("testticket","AstraA1","firstEvent","reserved");
       //Ticket ticket2 = new Ticket("testticket2","AstraB1","firstEvent","reserved");
     //  tickets.add(ticket);
       //tickets.add(ticket2);
       ticketPDF.createTicketPDF(tickets);
   }
    }

