import streamlit as st
import pandas as pd
import plotly.express as px
from datetime import datetime
from PIL import Image

# Load the data
df = pd.read_excel("ebl_employee_data_with_leaving_date.xlsx")

# Extract year from JoiningDate
df['JoiningYear'] = pd.to_datetime(df['JoiningDate']).dt.year

# Sidebar filters
st.sidebar.title("Filters")
selected_dept = st.sidebar.multiselect("Select Department(s)", df['Department'].unique(), default=df['Department'].unique())
selected_gender = st.sidebar.multiselect("Select Gender", df['Gender'].unique(), default=df['Gender'].unique())

# Apply filters
filtered_df = df[(df['Department'].isin(selected_dept)) & (df['Gender'].isin(selected_gender))]

# Load and display the logo centered
logo = Image.open("ebl_logo.jpg")
st.image(logo, use_container_width=False, width=800)
# Centered Title with styling
st.markdown(
    "<h1 style='text-align: center; color: #004481;'>📊 EBL Bank Employee Dashboard</h1>",
    unsafe_allow_html=True
)

# --- 1. Line Chart: Employees over the years ---
st.subheader("📆 Number of Employees Over the Years")
joined_by_year = filtered_df.groupby('JoiningYear')['EmployeeID'].count().reset_index()
fig1 = px.line(joined_by_year, x='JoiningYear', y='EmployeeID', markers=True, title='Employee Count by Joining Year')
fig1.update_layout(paper_bgcolor="#ffffff", plot_bgcolor="#e0e0e0")
st.plotly_chart(fig1)

# --- 2. Pie Chart: Gender Distribution ---
st.subheader("👨‍🦰 Gender Ratio")

# Count gender values and rename columns
gender_count = filtered_df['Gender'].value_counts().reset_index()
gender_count.columns = ['Gender', 'Count']

# Create pie chart
fig2 = px.pie(gender_count, names='Gender', values='Count', title='Gender Distribution')
st.plotly_chart(fig2)


# --- 3. Education Level Distribution ---
st.subheader("🎓 Education Level Breakdown")

edu_level = filtered_df['EducationLevel'].value_counts().reset_index()
edu_level.columns = ['EducationLevel', 'Count']

fig3 = px.bar(
    edu_level,
    x='EducationLevel',
    y='Count',
    title='Education Background',
    labels={'EducationLevel': 'Education Level', 'Count': 'Number of Employees'}
)
fig3.update_layout(paper_bgcolor="#ffffff", plot_bgcolor="#e0e0e0")
st.plotly_chart(fig3)

# --- 4. Department Headcount ---
st.subheader("🏢 Employees per Department")

dept_count = filtered_df['Department'].value_counts().reset_index()
dept_count.columns = ['Department', 'Count']

fig4 = px.bar(
    dept_count,
    x='Count',
    y='Department',
    orientation='h',
    title='Employees in Each Department',
    labels={'Count': 'Number of Employees', 'Department': 'Department'}
)
fig4.update_layout(paper_bgcolor="#ffffff", plot_bgcolor="#e0e0e0")
st.plotly_chart(fig4)


# --- 5. Location Spread ---
st.subheader("📍 Location-wise Employee Count")

location_count = filtered_df['Location'].value_counts().reset_index()
location_count.columns = ['Location', 'Count']

fig5 = px.bar(
    location_count,
    x='Location',
    y='Count',
    title='Employees by Location',
    labels={'Location': 'Location', 'Count': 'Number of Employees'}
)
fig5.update_layout(paper_bgcolor="#ffffff", plot_bgcolor="#e0e0e0")
st.plotly_chart(fig5)


# --- 6. Age Distribution ---
st.subheader("🎂 Age Distribution")

fig6 = px.histogram(
    filtered_df,
    x='Age',
    nbins=10,
    title='Age Histogram',
    labels={'Age': 'Age (Years)'}
)
fig6.update_layout(paper_bgcolor="#ffffff", plot_bgcolor="#e0e0e0")
st.plotly_chart(fig6)

# --- 7. Performance vs Annual Bonus (Improved Representation) ---
st.subheader("⭐ Average Annual Bonus by Performance Score")

# Group and calculate mean bonus
bonus_by_perf = filtered_df.groupby('PerformanceScore')['AnnualBonus'].mean().reset_index()
bonus_by_perf = bonus_by_perf.sort_values(by='AnnualBonus', ascending=False)

# Create bar chart
fig7 = px.bar(
    bonus_by_perf,
    x='PerformanceScore',
    y='AnnualBonus',
    text='AnnualBonus',
    title='Average Bonus per Performance Score',
    labels={'PerformanceScore': 'Performance Rating', 'AnnualBonus': 'Avg. Annual Bonus (BDT)'},
    color='AnnualBonus',
    color_continuous_scale='Blues'
)

fig7.update_layout(
    paper_bgcolor="#ffffff",
    plot_bgcolor="#e0e0e0",
    xaxis=dict(title='Performance Rating'),
    yaxis=dict(title='Average Annual Bonus (BDT)'),
    uniformtext_minsize=8,
    uniformtext_mode='hide'
)
st.plotly_chart(fig7)

# --- 8. Employee Exit, Tenure, and Gender Breakdown by Department ---
st.subheader("📊 Employee Exit, Tenure, and Gender Breakdown by Department")

# Preprocessing
filtered_df['LeavingDate'] = pd.to_datetime(filtered_df['LeavingDate'], errors='coerce')  # Optional if exists
filtered_df['JoiningDate'] = pd.to_datetime(filtered_df['JoiningDate'])
filtered_df['Tenure'] = ((filtered_df['LeavingDate'].fillna(pd.Timestamp.today()) - filtered_df['JoiningDate']).dt.days / 365).round(2)

# Group by department
dept_summary = filtered_df.groupby('Department').agg(
    EmployeesLeft=('LeavingDate', lambda x: x.notnull().sum()),
    AvgTenure=('Tenure', 'mean'),
    Male=('Gender', lambda x: (x == 'Male').sum()),
    Female=('Gender', lambda x: (x == 'Female').sum())
).reset_index()

# Melt data for grouped bar chart
dept_melted = pd.melt(
    dept_summary,
    id_vars='Department',
    value_vars=['EmployeesLeft', 'AvgTenure', 'Male', 'Female'],
    var_name='Metric',
    value_name='Value'
)

# Plotly grouped bar chart
fig8 = px.bar(
    dept_melted,
    x='Department',
    y='Value',
    color='Metric',
    barmode='group',
    title='Department-wise Exit Count, Tenure & Gender Distribution',
    labels={'Value': 'Value', 'Department': 'Department', 'Metric': 'Metric'},
    color_discrete_map={
        'EmployeesLeft': '#EF553B',
        'AvgTenure': '#636EFA',
        'Male': '#00CC96',
        'Female': '#AB63FA'
    }
)

fig8.update_layout(
    paper_bgcolor="#ffffff",
    plot_bgcolor="#f2f2f2",
    xaxis_tickangle=-45
)

st.plotly_chart(fig8)



# --- 9. Raw Data Table ---
st.subheader("📋 Employee Data Table")

st.dataframe(filtered_df)



