type gqlError = {
  errors: [
    {
      message: string;
      locations: [
        {
          line: number;
          column: number;
        }
      ];
      extensions: {
        code: string;
        exception: {
          stacktrace: string[];
        };
      };
    }
  ];
};


export type gqlResponceType<T> = {
  error?: gqlError,
  responce: T
}