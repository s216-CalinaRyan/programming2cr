import "server-only";
import {db} from "./db";
import {auth} from "@clerk/nextjs/server";

type Image = {
    userId: string;
    id: number;
    name: string;
    url: string;
    createdAt: Date;
    updatedAt: Date | null;
}

export async function getMyImages(): Promise<Image[] | null> {
    const user = await auth();
    if (!user.userId) {
        throw new Error("Unaurthorized");
    };


const images = db.query.images.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id),
});
return images;
}

//help me