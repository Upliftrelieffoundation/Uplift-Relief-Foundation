import { BookOpen, CheckCircle, Clock, Shield, Star } from "lucide-react";
export function TrustRibbon() {
  return (
    <div className="ribbon">
      <div className="ribbon-track">
        <div className="ribbon-item">
          <Shield />
          Govt. Registered
        </div>
        <div className="ribbon-item">
          <CheckCircle />
          100% Transparent
        </div>
        <div className="ribbon-item">
          <Clock />
          24/7 Rescue Team
        </div>
        <div className="ribbon-item">
          <BookOpen />
          Free Education
        </div>
        <div className="ribbon-item">
          <Star />
          80G Tax Exempt
        </div>

        {/* Duplicate set for seamless scrolling */}

        <div className="ribbon-item">
          <Shield />
          Govt. Registered
        </div>
        <div className="ribbon-item">
          <CheckCircle />
          100% Transparent
        </div>
        <div className="ribbon-item">
          <Clock />
          24/7 Rescue Team
        </div>
        <div className="ribbon-item">
          <BookOpen />
          Free Education
        </div>
        <div className="ribbon-item">
          <Star />
          80G Tax Exempt
        </div>
        <div className="ribbon-item">
          <Shield />
          Govt. Registered
        </div>
        <div className="ribbon-item">
          <CheckCircle />
          100% Transparent
        </div>
        <div className="ribbon-item">
          <Clock />
          24/7 Rescue Team
        </div>
      </div>
    </div>
  );
}
