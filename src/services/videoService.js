import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://umnkfswfigoakcidqqvc.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVtbmtmc3dmaWdvYWtjaWRxcXZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzMzE4MzUsImV4cCI6MTk4MzkwNzgzNX0.Mq0NAKaHgyPxsAT3UsvGqlfm-BpYjVgG94J9br9AiF8";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("Video").select("*");
        },
        insertVideo(object) {
            supabase
                .from("Video")
                .insert(object)
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    };
}
