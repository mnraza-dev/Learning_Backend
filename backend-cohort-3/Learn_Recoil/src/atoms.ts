import { atom } from "recoil";

export const networkAtom = atom<number>({
    key: "networkAtom",
    default: 102,
})
export const jobsAtom = atom<number>({
    key: "jobsAtom",
    default: 0
})
export const notificationAtom = atom<number>({
    key: "notificationAtom",
    default: 12
})
export const messagingAtom = atom<number>({
    key: "messageAtom",
    default: 0
})