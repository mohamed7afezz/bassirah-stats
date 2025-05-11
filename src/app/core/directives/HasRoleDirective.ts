import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import { AuthenticationService } from '../services/auth.service';

@Directive({
    selector: '[userHasRole]',
    standalone: false
})
export class HasRoleDirective {
  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authenticationService: AuthenticationService // Inject your AuthService
  ) {
  }

  @Input() set userHasRole(role: string) {
    const roles = this.authenticationService.getRoles(); // Get the current user's role from your AuthService

    if (!this.hasView && roles.includes(role)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (this.hasView && roles!.includes(role)) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}
