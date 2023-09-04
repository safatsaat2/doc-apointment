
const Banner = () => {
    return (
        <>
            <div className="max-w-7xl mx-auto flex justify-between items-center gap-x-10">
                <img src="https://i.ibb.co/t3X5ZbK/Gut-health-bro-1.png" alt="" className="w-[700px]" />
                <div>
                    <h1 className="text-6xl font-heading">Book Your Next Doctor Appointment</h1>
                    <p className="mt-4">Book Your Next Doctor{`'`}s Appointment with Ease, Simple, Convenient, and Stress-Free Scheduling for Your Health, Anytime, Anywhere.</p>
                    <button className="bg-primary text-white py-1 px-2 rounded-md mt-4">
                        Book Now
                    </button>
                </div>
            </div>
        </>
    );
};

export default Banner;