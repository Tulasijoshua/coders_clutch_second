export {};

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google: {
      translate: {
        TranslateElement: {
          new (options: any, element: string): any;
          InlineLayout: {
            SIMPLE: any;
          };
        };
      };
    };
    googleTranslateElementInit: () => void;
  }
}