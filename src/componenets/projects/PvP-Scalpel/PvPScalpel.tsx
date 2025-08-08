import styles from "../ProjectStyle.module.css"
export default function PvPScalpel() {
    return(
            <div className={styles.projectSection}>
                <span className={styles.projectTitle}>PvP Scalpel – Guild PvP Analytics Web App</span>
                <div className={styles.projectBody}>

                    <div className={styles.projectDescription}>
                        <p>
                            PvP Scalpel is a full-stack web application built for my World of Warcraft PvP guild. It tracks, analyzes, and displays arena and battleground performance through a custom-designed interface.
                        </p>

                        <ul>
                            <li><strong>Guild-Exclusive Leaderboard</strong> – Displays ranked performance data exclusively for guild members.</li>
                            <li><strong>Global Character Search</strong> – Lets users find and view any WoW character's PvP data.</li>
                            <li><strong>User Accounts & Interaction</strong> – Visitors can register accounts with email verification (6-digit code) to like and comment on characters.</li>
                            <li><strong>Automated WoW API Sync</strong> – Pulls updated character and match data every 40 minutes using Blizzard’s API.</li>
                            <li><strong>Lua Addon Integration</strong> – In-game addon collects match stats (damage, healing, MMR, etc.) and syncs them with the backend.</li>
                            <li><strong>Tech Stack</strong> – React (SPA), Express.js, MongoDB, and Blizzard’s API.</li>
                            <li><strong>Performance-Optimized</strong> – Features in-memory caching and indexed database queries for fast, efficient access.</li>
                            <li><strong>Codebase Size</strong> – ~11,500 lines of code across the frontend and backend</li>
                        </ul>

                        <p>This project demonstrates my full-stack engineering skills, from secure user authentication and game API integration to frontend UX and backend performance optimization.</p>

                        <a href="https://www.pvpscalpel.com">Visit Here</a>
                        <a href="https://github.com/lStanev00/PvP-Scalpel-FrontEnd">Frontend Public Repo</a>
                    </div>

                    <video
                        src="/video/PvP-Scalpel.mp4"
                        controls
                        className={styles.videoWidget}
                    />

                </div>
            </div>
    )
}

PvPScalpel.getName = () => {return "PvP Scalpel"}