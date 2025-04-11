'use client'
import ExamDetails from "@/components/ExamDetails";
import { useParams } from "next/navigation";
import {examData} from '@/data/examData'

export default function LawEntranceExams() {
    const {id} = useParams();
    return (
        <>
            <ExamDetails exam={examData[parseInt(id)]}/>
        </>
    )
}

