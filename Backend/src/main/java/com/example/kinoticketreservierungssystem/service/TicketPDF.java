package com.example.kinoticketreservierungssystem.service;

import com.example.kinoticketreservierungssystem.entity.Seat;
import com.example.kinoticketreservierungssystem.entity.ShowEvent;
import com.example.kinoticketreservierungssystem.entity.Ticket;
import com.example.kinoticketreservierungssystem.repository.MenuRepository;
import com.example.kinoticketreservierungssystem.repository.SeatRepository;
import com.example.kinoticketreservierungssystem.repository.ShowEventRepository;
import com.itextpdf.text.*;
import com.itextpdf.text.pdf.PdfWriter;
import net.glxn.qrgen.javase.QRCode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.imageio.ImageIO;
import java.io.*;
import java.util.Set;

@Service
public class TicketPDF {

    @Autowired
    ShowEventRepository showEventRepository;
    @Autowired
    SeatRepository seatRepository;
    @Autowired
    MenuRepository menuRepository;

    private static String FILE = System.getProperty("user.home") + File.separator + "Tickets" + File.separator + "tickets.pdf";
    private static Font catFont = new Font(Font.FontFamily.TIMES_ROMAN, 40,
            Font.BOLD);
    private static Font subFont = new Font(Font.FontFamily.TIMES_ROMAN, 23,
            Font.NORMAL);



    public File createTicketPDF(Set<Ticket> tickets, String menu) {

        Document document = new Document();
        File file = new File("webapps/ticket.pdf");


        try {
            PdfWriter.getInstance(document, new FileOutputStream(file));


            //open
            document.open();
            for (Ticket ticket : tickets) {
                Seat seat = seatRepository.findBySeatID(ticket.getSeatInfo()).get();
                ShowEvent showEvent = showEventRepository.findByShowEventID(ticket.getShowEventInfo()).get();
                Paragraph p = new Paragraph();
                p.add(showEvent.getMovieInfo().getMovieName());
                p.setAlignment(Element.ALIGN_CENTER);

                document.add(p);

                Paragraph p1 = new Paragraph();
                p1.add("Room: " + showEvent.getSeatingTemplateInfo().getEventRoomID());
                p1.setAlignment(Element.ALIGN_CENTER);

                document.add(p1);

                Paragraph p2 = new Paragraph();
                p2.add("Date: " + showEvent.getEventStart().toString());
                p2.setAlignment(Element.ALIGN_LEFT);
                document.add(p2);

                Paragraph p3 = new Paragraph();
                p3.add("Row: " + (seat.getRow()));
                p3.setAlignment(Element.ALIGN_LEFT);

                document.add(p3);

                Paragraph p4 = new Paragraph();
                p4.add("Number: " + (seat.getSeatNumber()));
                p4.setAlignment(Element.ALIGN_LEFT);
                document.add(p4);

                try {
                    document.add(generateQRCodeImage(ticket.getTicketID()));
                } catch (Exception e) {
                    e.printStackTrace();
                }
                if (tickets.iterator().hasNext()) {
                    document.newPage();
                }
            }
            if (menu != null) {
                document.newPage();
                Paragraph p5 = new Paragraph();
                p5.add("Menu Voucher");
                p5.setAlignment(Element.ALIGN_CENTER);
                document.add(p5);

                try {
                    document.add(generateQRCodeImage(menuRepository.findById(menu).get().getMenuId()));
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
            //close
            document.close();


            return file;
        } catch (DocumentException e) {
            e.printStackTrace();
            return null;
        } catch (FileNotFoundException e) {
            e.printStackTrace();
            return null;
        }
    }


    public static Image generateQRCodeImage(String barcodeText) throws Exception {
        ByteArrayOutputStream stream = QRCode
                .from(barcodeText)
                .withSize(250, 250)
                .stream();
        ByteArrayInputStream bis = new ByteArrayInputStream(stream.toByteArray());
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        ImageIO.write(ImageIO.read(bis), "png", baos);
        Image iTextImage = Image.getInstance(baos.toByteArray());
        return iTextImage;
    }

    private static void addEmptyLine(Paragraph paragraph, int number) {
        for (int i = 0; i < number; i++) {
            paragraph.add(new Paragraph(" "));
        }
    }
}