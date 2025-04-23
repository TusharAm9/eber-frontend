// google-maps.service.ts
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class GoogleMapsService {
  private loaded = false;
  private apiKey = "YOUR_API_KEY"; // Replace with your API key

  loadGoogleMaps(): Promise<void> {
    if (this.loaded) {
      return Promise.resolve();
    }

    return new Promise<void>((resolve) => {
      const script = document.createElement("script");
      script.src = `https://maps.gomaps.pro/maps/api/js?key=AlzaSy_z5mg3YXfEjmYOLkb3JImngmSiuDOiotW&libraries=drawing,places,geometry,visualization,distance`;
      script.onload = () => {
        this.loaded = true;
        resolve();
      };
      script.onerror = () => console.error("Could not load Google Maps API");
      document.body.appendChild(script);
    });
  }
}
