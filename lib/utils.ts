import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


/**
 * Takes in a date string and formats it to return a DD-MM-YYYY format date
 * @param {string} inputDate
 * @returns {string}
 */

export function formatDate(inputDate: string): string {
  const date = new Date(inputDate);

  if (isNaN(date.getTime())) {
       return "Invalid Date";
  }

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-based, so add 1
  const year = date.getFullYear();

  const formattedDate = `${day}-${month}-${year}`;

  return formattedDate;
}


/**
 * Checks if a string is a valid UUID
 * @param {string} input
 * @returns {boolean}
 */
export function isUUID(input: string): boolean {
  const uuidPattern =
       /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
  return uuidPattern.test(input);
}

/**
* if string is 13 digits number, then its a barcode id
* @param {string} str
* @returns {boolean}
*/
export function isBarcodeId(str: string): boolean {
  const formatRegex = /^\d{13}$/;
  return formatRegex.test(str);
}


/**
 * Description
 * @param {string} text
 * @returns {any}
 */
export function slugify(text: string): string {
  return text
       .toLowerCase()
       .replace(/ /g, "-") // Replace spaces with hyphens
       .replace(/[^a-z0-9-]/g, "") // Remove non-alphanumeric characters
       .replace(/--+/g, "-") // Replace multiple hyphens with a single hyphen
       .replace(/^-|-$/g, ""); // Remove leading and trailing hyphens
}

export function unslugify(slug: string): string {
  const words = slug.split("-");
  const final = words.map((word) => {
       return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return final.join(" ");
}


export function generateRandomLocation(): {
     lat: number;
     lng: number;
} {
     const minlat: number = 6.0233;
     const maxlat: number = 6.2322;
     const minLng: number = 7.0733;
     const maxLng: number = 7.2822;

     // Generate random lat and lng
     const lat: number = parseFloat(
          (Math.random() * (maxlat - minlat) + minlat).toFixed(6),
     );
     const lng: number = parseFloat(
          (Math.random() * (maxLng - minLng) + minLng).toFixed(6),
     );

     return { lat, lng };
}

export function getInitials(name: string): string {
     const words = name.trim().split(" ");

     if (words.length >= 2) {
          const firstInitial = words[0].charAt(0);
          const secondInitial = words[1].charAt(0);
          return `${firstInitial}${secondInitial}`;
     }

     return words[0].charAt(0);
}
