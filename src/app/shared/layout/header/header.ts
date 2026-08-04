import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { MatAnchor } from "@angular/material/button";

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, RouterLink, MatAnchor],
  templateUrl: './header.html',
  styleUrl: './header.css',
})

export class Header {
  loja = "LOVI - Sua Loja Virtual!";
}
