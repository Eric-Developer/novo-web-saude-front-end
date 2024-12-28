"use client"
import Header from "@/components/UI/Header";
import Search from "@/components/UI/Search";
import Filters from "@/components/UI/Filters";
import Card from "@/components/UI/Card";
import Pagination from "@/components/UI/Pagination";
import "@/app/style.css"
import Footer from "@/components/UI/Footer";
export default function Home() {
  const handlePageChange = (page: number) => {
    page = 99
  };
  return (
      <section>
        <Header/>
        <div className="search-filters">
          <Search/>
          <Filters/>
        </div>
        <Pagination totalPages={50} currentPage={1} onPageChange={handlePageChange} classNameMobile={"pagination-mobile"}/>
        <div className="card-main">
        <Card/>
        </div>
        <Pagination totalPages={50} currentPage={1} onPageChange={handlePageChange}/>
        <Footer/>
      </section>
  )
}