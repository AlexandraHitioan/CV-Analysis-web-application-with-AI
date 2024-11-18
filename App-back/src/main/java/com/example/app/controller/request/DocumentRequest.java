package com.example.app.controller.request;

import com.example.app.domain.AccountCredentials;
import com.example.app.domain.Document;
import jakarta.persistence.Column;
import lombok.*;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class DocumentRequest {
    @NonNull
    private String name;

    @NonNull
    private LocalDateTime date;

    @NonNull
    private String data;

    @NonNull
    private String base64;

    @NonNull
    private String emailUser;

    public Document returnDocumentEntity(AccountCredentials user) {
        return new Document(name,date,data,base64,user);
    }
}
