import { User } from "@clerk/nextjs/server"

declare interface AppleCardProps {
    title:string
}

declare interface HeaderProps{
    user:User
}

declare interface CardContentProps{
    cast:Array[]
}