import { NgModule } from "@angular/core";
import ButtonComponent from "./components/button/button.component";
import HeaderComponent from "./components/header/header.component";
import PageComponent from "./components/page/page.component";

@NgModule({
  declarations: [ButtonComponent, HeaderComponent, PageComponent],
  imports: [],
  exports: [ButtonComponent, HeaderComponent, PageComponent],
})
export class DesignSystemModule {}
