import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'noticia-component',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css'],
})
export class NoticiaComponent implements OnInit {
  descricao: any;
  banner: string =
    'https://imgs.search.brave.com/RIUpsYezwxH1U7Nppkbn97XxvFR_y_bcYK8eAVlW6U8/rs:fit:1200:1080:1/g:ce/aHR0cHM6Ly9lbnR1/c2lhc3RhbmVyZC5j/b20uYnIvd3AtY29u/dGVudC91cGxvYWRz/LzIwMjIvMDUvanVq/dXRzdS1rYWlzZW4t/dGVtcG9yYWRhLTIt/ZGF0YS1lc3RyZWlh/LW9uZGUtYXNzaXN0/aXItcGVyc29uXzEz/eHMuanBn';
  tipo: string = 'Animes';

  genero: any;
  ImagemFundo: any;
  titulo: any;
  data: any;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      window.scrollTo(0, 0);
      this.genero = this.activatedRoute.snapshot.paramMap.get('genero');
      this.ImagemFundo = this.activatedRoute.snapshot.paramMap.get('imagem');
      this.titulo = this.activatedRoute.snapshot.paramMap.get('titulo');
      this.data = this.activatedRoute.snapshot.paramMap.get('data');
      this.descricao = this.activatedRoute.snapshot.paramMap.get('descricao');
    });
  }
}
