import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NotFoundComponent } from "./core/not-found/not-found.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
  },
  {
    path: 'personajes',
    loadChildren: () => import('./personajes/personajes.module').then(m => m.PersonajesModule)
  },
  {
    path: 'planeta',
    loadChildren: () => import('./planetas/planetas.module').then(m => m.PlanetasModule)
  },
  {
    path: "not-found",
    component: NotFoundComponent,
  },
  {
    path: "**",
    redirectTo: "not-found",
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
