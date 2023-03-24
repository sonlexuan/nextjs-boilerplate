import React from "react";

export default function AuthLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage: "url('/img/register_bg_2.png')",
            }}
          ></div>
          <h1>Test Layout</h1>
          {children}
        </section>
      </main>
    </>
  );
}
