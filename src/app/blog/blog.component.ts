import { Component } from '@angular/core';
import { Noticia } from '../interfaces/noticia';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  noticies: Noticia[] = [
    {
      titol: 'Primera notícia',
      imatge: 'https://via.placeholder.com/400x200?text=Primera+Notícia',
      cos: 'Aquesta és la primera notícia inicialitzada al blog.',
      data: '2025-07-28'
    },
    {
      titol: 'Segona notícia',
      imatge: 'https://via.placeholder.com/400x200?text=Segona+Notícia',
      cos: 'Aquesta és la segona notícia, també creada per defecte.',
      data: '2025-07-27'
    }
  ];

  novaNoticia: Noticia = {
    titol: '',
    imatge: '',
    cos: '',
    data: ''
  };

  error: string = '';

  afegirNoticia() {
    if (
      this.novaNoticia.titol.trim() === '' ||
      this.novaNoticia.imatge.trim() === '' ||
      this.novaNoticia.cos.trim() === '' ||
      this.novaNoticia.data.trim() === ''
    ) {
      this.error = 'Tots els camps són obligatoris.';
      return;
    }

    this.noticies.push({ ...this.novaNoticia });
    this.novaNoticia = { titol: '', imatge: '', cos: '', data: '' };
    this.error = '';
  }
}