
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpModel } from '../model/SignUpModel';
import { LoginModel } from '../model/LoginModel';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private loggedInUser: any = null;

  constructor(private router: Router) {}

  // Register new users
  public register(signUpObj: SignUpModel): boolean {
    const localUser = localStorage.getItem('angular17users');
    let users = [];
    if (localUser) {
      users = JSON.parse(localUser);
    }

    // Check if user already exists
    const userExists = users.find((user: SignUpModel) => user.email === signUpObj.email);
    if (userExists) {
      alert('User with this email already exists.');
      return false; // Prevent duplicate user registration
    }

    users.push(signUpObj);
    localStorage.setItem('angular17users', JSON.stringify(users));

    // Debugging step: check what is stored
    console.log('Users in localStorage after registration:', users);

    return true;
  }

  // Login logic
  public login(loginObj: LoginModel): boolean {
    const localUsers = localStorage.getItem('angular17users');
    if (localUsers) {
      const users = JSON.parse(localUsers);

      // Debugging step: check users in localStorage
      console.log('Users retrieved from localStorage:', users);

      const isUserPresent = users.find((user: SignUpModel) =>
        user.email === loginObj.email && user.password === loginObj.password
      );

      if (isUserPresent) {
        this.loggedInUser = isUserPresent;
        localStorage.setItem('loggedUser', JSON.stringify(isUserPresent));

        // Debugging step: check logged-in user
        console.log('User found and logged in:', this.loggedInUser);

        return true;
      } else {
        console.log('No matching user found for login:', loginObj);
      }
    } else {
      console.log('No users in localStorage for login');
    }
    return false;
  }

  // Logout function
  public logout(): void {
    this.loggedInUser = null;
    localStorage.removeItem('loggedUser');
    this.router.navigateByUrl('/login');
  }

  // Check if a user is logged in
  public get isAuthenticated(): boolean {
    return this.loggedInUser !== null;
  }

  // Get logged-in user's name
  public get username(): string | undefined {
    return this.loggedInUser?.name;
  }

  // Get user roles (modify logic if needed)
  public get roles(): string[] {
    return this.loggedInUser ? ['USER'] : [];
  }

  // Get logged-in user data
  public getLoggedUser(): SignUpModel | null {
    return this.loggedInUser;
  }
}
