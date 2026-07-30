import React from 'react';
import Translate from '@/components/ui/Translate';
import styles from '../legal.module.css';

export default function TermsAndConditions() {
  return (
    <div className={styles.legalContainer}>
      <h1 className={styles.title}>
        <Translate en="Terms & Conditions" ar="الشروط والأحكام" />
      </h1>
      <span className={styles.lastUpdated}>
        <Translate en="Last Updated: July 30, 2026" ar="آخر تحديث: 30 يوليو 2026" />
      </span>

      <div className={styles.content}>
        <p>
          <Translate 
            en="Welcome to Irken Solutions. These Terms and Conditions govern your access to and use of our enterprise platform, APIs, and related services. By accessing or using our services, you agree to be bound by these terms." 
            ar="مرحبًا بك في إيركن سوليوشنز. تحكم هذه الشروط والأحكام وصولك إلى منصة المؤسسات الخاصة بنا، وواجهات برمجة التطبيقات (APIs)، والخدمات ذات الصلة. من خلال الوصول إلى خدماتنا أو استخدامها، فإنك توافق على الالتزام بهذه الشروط." 
          />
        </p>

        <h2>
          <Translate en="1. Acceptance of Terms" ar="1. قبول الشروط" />
        </h2>
        <p>
          <Translate 
            en="By accessing Irken Solutions, you confirm that you have the legal authority to bind your organization to these Terms. If you do not agree, you must not use our services." 
            ar="بوصولك إلى إيركن سوليوشنز، فإنك تؤكد أن لديك السلطة القانونية لإلزام مؤسستك بهذه الشروط. إذا كنت لا توافق، يجب عليك عدم استخدام خدماتنا." 
          />
        </p>

        <h2>
          <Translate en="2. Service Provision and Access" ar="2. توفير الخدمة والوصول" />
        </h2>
        <p>
          <Translate 
            en="Irken Solutions grants you a non-exclusive, non-transferable, revocable license to access and use the platform strictly in accordance with these Terms and any applicable Master Service Agreement (MSA)." 
            ar="تمنحك شركة إيركن سوليوشنز ترخيصًا غير حصري وغير قابل للتحويل وقابل للإلغاء للوصول إلى المنصة واستخدامها بشكل صارم وفقًا لهذه الشروط وأي اتفاقية خدمة رئيسية (MSA) معمول بها." 
          />
        </p>
        <ul>
          <li>
            <Translate 
              en="You are responsible for maintaining the confidentiality of your account credentials." 
              ar="أنت مسؤول عن الحفاظ على سرية بيانات اعتماد حسابك." 
            />
          </li>
          <li>
            <Translate 
              en="You must not use the services for any illegal or unauthorized purpose." 
              ar="يجب ألا تستخدم الخدمات لأي غرض غير قانوني أو غير مصرح به." 
            />
          </li>
        </ul>

        <h2>
          <Translate en="3. Intellectual Property Rights" ar="3. حقوق الملكية الفكرية" />
        </h2>
        <p>
          <Translate 
            en="All intellectual property rights in the Irken Solutions platform, including software, design, text, graphics, and APIs, belong to Irken Solutions. You do not acquire any ownership rights by using our services." 
            ar="جميع حقوق الملكية الفكرية في منصة إيركن سوليوشنز، بما في ذلك البرامج والتصميم والنصوص والرسومات وواجهات برمجة التطبيقات (APIs)، تنتمي إلى شركة إيركن سوليوشنز. لا تكتسب أي حقوق ملكية باستخدام خدماتنا." 
          />
        </p>

        <h2>
          <Translate en="4. Limitation of Liability" ar="4. حدود المسؤولية" />
        </h2>
        <p>
          <Translate 
            en="To the maximum extent permitted by law, Irken Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses." 
            ar="إلى أقصى حد يسمح به القانون، لن تكون شركة إيركن سوليوشنز مسؤولة عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية أو عقابية، أو أي خسارة في الأرباح أو الإيرادات، سواء تم تكبدها بشكل مباشر أو غير مباشر، أو أي فقدان للبيانات أو الاستخدام أو السمعة الطيبة أو غيرها من الخسائر غير الملموسة." 
          />
        </p>

        <h2>
          <Translate en="5. Consumer App Distinction" ar="5. التمييز الخاص بتطبيق المستهلك" />
        </h2>
        <p>
          <Translate 
            en="These Terms apply specifically to the Irken Solutions B2B enterprise platform. End-users accessing parking services via the irken.eg consumer application are subject to a separate set of Consumer Terms of Service available within the app." 
            ar="تنطبق هذه الشروط تحديدًا على منصة الأعمال B2B الخاصة بإيركن سوليوشنز. يخضع المستخدمون النهائيون الذين يصلون إلى خدمات المواقف عبر تطبيق المستهلك irken.eg لمجموعة منفصلة من شروط خدمة المستهلك المتاحة داخل التطبيق." 
          />
        </p>

        <h2>
          <Translate en="6. Governing Law" ar="6. القانون الحاكم" />
        </h2>
        <p>
          <Translate 
            en="These Terms shall be governed by and construed in accordance with the laws of the Arab Republic of Egypt, without regard to its conflict of law provisions." 
            ar="تخضع هذه الشروط وتفسر وفقًا لقوانين جمهورية مصر العربية، دون اعتبار لأحكام تنازع القوانين." 
          />
        </p>
      </div>
    </div>
  );
}
