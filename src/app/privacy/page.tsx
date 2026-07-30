import React from 'react';
import Translate from '@/components/ui/Translate';
import styles from '../legal.module.css';

export default function PrivacyPolicy() {
  return (
    <div className={styles.legalContainer}>
      <h1 className={styles.title}>
        <Translate en="Privacy Policy" ar="سياسة الخصوصية" />
      </h1>
      <span className={styles.lastUpdated}>
        <Translate en="Last Updated: July 30, 2026" ar="آخر تحديث: 30 يوليو 2026" />
      </span>

      <div className={styles.content}>
        <p>
          <Translate 
            en="At Irken Solutions, we take your privacy and the security of your data seriously. This Privacy Policy outlines how we collect, use, process, and protect the information provided by our enterprise partners (B2B clients) and the end-users of the irken.eg platform." 
            ar="في إيركن سوليوشنز، نأخذ خصوصيتك وأمن بياناتك على محمل الجد. توضح سياسة الخصوصية هذه كيفية جمعنا، استخدامنا، معالجتنا، وحمايتنا للمعلومات المقدمة من شركائنا (عملاء الأعمال) والمستخدمين النهائيين لمنصة irken.eg." 
          />
        </p>

        <h2>
          <Translate en="1. Information We Collect" ar="1. المعلومات التي نجمعها" />
        </h2>
        <p>
          <Translate 
            en="We collect information to provide better services to all our users. The types of personal information we collect include:" 
            ar="نحن نجمع المعلومات لتقديم خدمات أفضل لجميع مستخدمينا. تشمل أنواع المعلومات الشخصية التي نجمعها ما يلي:" 
          />
        </p>
        <ul>
          <li>
            <Translate 
              en="Account Information: When you create an account, we may collect your name, email address, phone number, and organization details." 
              ar="معلومات الحساب: عند إنشاء حساب، قد نجمع اسمك وعنوان بريدك الإلكتروني ورقم هاتفك وتفاصيل مؤسستك." 
            />
          </li>
          <li>
            <Translate 
              en="Usage Data: We collect data about how you interact with our services, including IP addresses, browser types, device information, and navigation paths." 
              ar="بيانات الاستخدام: نجمع بيانات حول كيفية تفاعلك مع خدماتنا، بما في ذلك عناوين IP وأنواع المتصفحات ومعلومات الجهاز ومسارات التنقل." 
            />
          </li>
          <li>
            <Translate 
              en="Location Data: For parking and mobility services, we may collect precise or approximate location data to facilitate routing and capacity management." 
              ar="بيانات الموقع: بالنسبة لخدمات المواقف والتنقل، قد نجمع بيانات الموقع الدقيقة أو التقريبية لتسهيل التوجيه وإدارة السعة." 
            />
          </li>
        </ul>

        <h2>
          <Translate en="2. How We Use Information" ar="2. كيف نستخدم المعلومات" />
        </h2>
        <p>
          <Translate 
            en="We use the collected information for various purposes, including:" 
            ar="نستخدم المعلومات التي تم جمعها لأغراض مختلفة، بما في ذلك:" 
          />
        </p>
        <ul>
          <li>
            <Translate 
              en="To provide and maintain our services." 
              ar="لتوفير وصيانة خدماتنا." 
            />
          </li>
          <li>
            <Translate 
              en="To improve, personalize, and expand our platform." 
              ar="لتحسين منصتنا وتخصيصها وتوسيعها." 
            />
          </li>
          <li>
            <Translate 
              en="To understand and analyze how you use our services." 
              ar="لفهم وتحليل كيفية استخدامك لخدماتنا." 
            />
          </li>
          <li>
            <Translate 
              en="To communicate with you, including for customer service, updates, and marketing." 
              ar="للتواصل معك، بما في ذلك لخدمة العملاء والتحديثات والتسويق." 
            />
          </li>
        </ul>

        <h2>
          <Translate en="3. Data Security" ar="3. أمن البيانات" />
        </h2>
        <p>
          <Translate 
            en="We implement industry-standard security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security." 
            ar="نحن ننفذ تدابير أمنية متوافقة مع معايير الصناعة للحماية من الوصول غير المصرح به أو التغيير أو الكشف أو التدمير لمعلوماتك الشخصية. ومع ذلك، لا توجد طريقة نقل عبر الإنترنت آمنة بنسبة 100٪، ولا يمكننا ضمان الأمان المطلق." 
          />
        </p>

        <h2>
          <Translate en="4. B2B vs. Consumer Data" ar="4. بيانات الشركات مقابل المستهلكين" />
        </h2>
        <p>
          <Translate 
            en="Irken Solutions operates as a B2B platform. Data handled on behalf of enterprise clients is governed by separate Data Processing Agreements (DPAs). Consumer data collected via the irken.eg app is handled according to the specific consumer privacy terms presented within the app." 
            ar="تعمل شركة إيركن سوليوشنز كمنصة أعمال للشركات. تخضع البيانات التي يتم التعامل معها نيابة عن عملاء الشركات لاتفاقيات معالجة بيانات (DPAs) منفصلة. يتم التعامل مع بيانات المستهلكين التي يتم جمعها عبر تطبيق irken.eg وفقًا لشروط خصوصية المستهلك المحددة المعروضة داخل التطبيق." 
          />
        </p>

        <h2>
          <Translate en="5. Contact Us" ar="5. اتصل بنا" />
        </h2>
        <p>
          <Translate 
            en="If you have any questions or concerns regarding this Privacy Policy, please contact our Data Protection Officer at privacy@irken.eg." 
            ar="إذا كان لديك أي أسئلة أو مخاوف بشأن سياسة الخصوصية هذه، يرجى الاتصال بمسؤول حماية البيانات لدينا على privacy@irken.eg." 
          />
        </p>
      </div>
    </div>
  );
}
