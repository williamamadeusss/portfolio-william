function HamburgerIcon({ className }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center`}>
      <svg
        width="800px"
        height="800px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className={`fill-current ${className}`}
      >
        <path
          d="M4 18L20 18"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M4 12L20 12"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M4 6L20 6"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
}
function CloseIcon({ className }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100"
        height="100"
        viewBox="0 0 50 50"
        className={`fill-current ${className}`}
      >
        <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
      </svg>
    </div>
  );
}
function LeftArrowIcon({ className }: { className?: string }) {
  return (
    <div className="flex items-center justify-center">
      <svg
        className={`fill-current ${className}`}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            d="M4.87132 7.22866H14V8.77144H4.87132L8.8943 12.9091L7.83365 14L2 8.00005L7.83365 2L8.8943 3.09091L4.87132 7.22866Z"
            // fill="white"
          />
        </g>
      </svg>
    </div>
  );
}
function LinkIcon({ className }: { className?: string }) {
  return (
    <div className="flex items-center justify-center">
      <svg
        className={`fill-current ${className}`}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        // fill="none"
        // stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        // class="lucide lucide-link2-icon lucide-link-2"
      >
        <path d="M9 17H7A5 5 0 0 1 7 7h2" />
        <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
        <line x1="8" x2="16" y1="12" y2="12" />
      </svg>
    </div>
  );
}

export { HamburgerIcon, CloseIcon, LeftArrowIcon, LinkIcon };
