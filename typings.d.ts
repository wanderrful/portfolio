declare module '*.svg'
declare module '*.png'
declare module '*.jpg'

interface IPosterData {
    filename: string,
    title: string,
    url: string,
    role?: string,
    comment?: string,
}