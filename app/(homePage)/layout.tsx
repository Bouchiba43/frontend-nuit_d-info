import React from 'react';

export default function homePage({
    children,
  }: {
    children: React.ReactNode;
  }) {return (
        <div>
            <header>
            </header>
            <main>{children}</main>
            <footer>
                
            </footer>
        </div>
    );
};
