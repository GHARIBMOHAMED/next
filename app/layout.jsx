"use client";
import '@style/globals.css';
import { Children } from 'react';
import  Botoom  from '@components/Botoom';
import { ApolloProvider } from '@apollo/client'
import apolloClient from '../lib/apollo'


const RootLayout = ({ children }) => {
    return (
        <ApolloProvider client={apolloClient}>
            <html lang='en'>
                <body>
                    <Botoom/>
                    <main className='flex-auto w-full min-w-0 lg:static lg:max-h-full lg:overflow-visible'>
                        <div className='container mx-auto px-4 pt-4'>
                            {children}
                        </div>
                    </main>
                </body>
            </html>
        </ApolloProvider>
    )
}

export default RootLayout